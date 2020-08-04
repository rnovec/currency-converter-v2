import React, { createContext, useState, useEffect } from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import { api } from "./api";

export const ConversionContext = createContext();

const DEFAULT_BASE_CURRENCY = "USD";
const DEFAULT_QUOTE_CURRENCY = "GBP";

const save = (key, data) => {
  return AsyncStorage.setItem(`CurrencyConverter::${key}`, data);
};

const get = (key) => {
  return AsyncStorage.getItem(`CurrencyConverter::${key}`);
};

const CACHE_KEYS = {
  QUOTE_CURRENCY: "QUOTE_CURRENCY",
};

export const ConversionContextProvider = ({ children }) => {
  const [baseCurrency, _setBaseCurrency] = useState(DEFAULT_BASE_CURRENCY);
  const [quoteCurrency, _setQuoteCurrency] = useState(DEFAULT_QUOTE_CURRENCY);
  const [date, setDate] = useState();
  const [rates, setRates] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const setBaseCurrency = (currency) => {
    setIsLoading(true);

    return api(`/latest?base=${currency}`)
      .then((res) => {
        _setBaseCurrency(currency);
        setDate(res.date);
        setRates(res.rates);
      })
      .catch((error) => {
        Alert.alert("Sorry, something went wrong.", error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const setQuoteCurrency = (currency) => {
    _setQuoteCurrency(currency);
    return save(CACHE_KEYS.QUOTE_CURRENCY, currency);
  };

  const swapCurrencies = () => {
    setBaseCurrency(quoteCurrency);
    setQuoteCurrency(baseCurrency);
  };

  useEffect(() => {
    setBaseCurrency(DEFAULT_BASE_CURRENCY);

    get(CACHE_KEYS.QUOTE_CURRENCY).then((cachedQuote) => {
      if (cachedQuote) {
        setQuoteCurrency(cachedQuote);
      }
    });
  }, []);

  const contextValue = {
    baseCurrency,
    quoteCurrency,
    setBaseCurrency,
    setQuoteCurrency,
    swapCurrencies,
    date,
    rates,
    isLoading,
  };

  return (
    <ConversionContext.Provider value={contextValue}>
      {children}
    </ConversionContext.Provider>
  );
};
