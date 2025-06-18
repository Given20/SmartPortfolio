# SmartPortfolio

## Overview

**SmartPortfolio** is an innovative web-based portfolio management application designed to track stock investments with real-time data and interactive visualizations. Built with **Node.js** and **Express** for the backend, **jQuery Mobile** and **jQuery** for a mobile-optimized frontend, and integrated with the **Alpha Vantage API** for stock data, this project showcases advanced full-stack development skills. The application features a sleek, Apple-inspired UI with interactive charts to display stock performance, making it a standout tool for personal finance management.

## Features

- **Real-Time Stock Tracking**: Add stocks (e.g., AAPL, GOOGL) and view current prices fetched via the Alpha Vantage API.
- **Interactive Charts**: Visualize stock performance with dynamic line charts using Chart.js.
- **Portfolio Summary**: Calculate and display total portfolio value and percentage gains/losses in real-time.
- **Stock Management**: Add or remove stocks with seamless updates to the portfolio.
- **Mobile-Optimized UI**: Utilizes jQuery Mobile for a responsive, touch-friendly design inspired by Apple's minimalist aesthetic.
- **Real-Time Updates**: Refresh the interface to reflect the latest stock prices and calculations.

## Technologies Used

- **Backend**: 
  - Node.js: Server-side JavaScript runtime.
  - Express: Web framework for routing and middleware.
  - Axios: HTTP client for API requests to Alpha Vantage.
- **Frontend**: 
  - jQuery Mobile: Mobile-first framework for UI components.
  - jQuery: JavaScript library for DOM manipulation and AJAX.
  - Chart.js: Library for creating interactive charts.
- **API**: Alpha Vantage (free tier) for real-time stock quotes.
- **Database**: In-memory array (for simplicity; extensible to MongoDB or SQLite).

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v14.x or later recommended): [Download](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (for version control): [Download](https://git-scm.com/)
- A code editor (e.g., Visual Studio Code)
- An **Alpha Vantage API Key**: Sign up at [Alpha Vantage](https://www.alphavantage.co/support/#api-key)

