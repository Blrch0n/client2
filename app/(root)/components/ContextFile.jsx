"use client";
import { createContext, useContext, useState, useEffect } from "react";

const OrderHistoryContext = createContext();

export function OrderHistoryProvider({ children }) {
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {
    // Load from localStorage on mount
    const savedHistory = localStorage.getItem("orderHistory");
    if (savedHistory) {
      setOrderHistory(JSON.parse(savedHistory));
    }
  }, []);

  const addOrderToHistory = (newOrder) => {
    const existingOrders = JSON.parse(
      localStorage.getItem("orderHistory") || "[]"
    );
    const updatedOrders = [...existingOrders, newOrder];
    localStorage.setItem("orderHistory", JSON.stringify(updatedOrders));
    setOrderHistory(updatedOrders);
    console.log("Order added to history:", newOrder);
  };

  return (
    <OrderHistoryContext.Provider value={{ orderHistory, addOrderToHistory }}>
      {children}
    </OrderHistoryContext.Provider>
  );
}

export function useOrderHistory() {
  return useContext(OrderHistoryContext);
}
