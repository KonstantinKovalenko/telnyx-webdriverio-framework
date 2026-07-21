# Telnyx WebdriverIO Test Automation Framework

[![CI](https://github.com/KonstantinKovalenko/telnyx-webdriverio-framework/actions/workflows/wdio.yml/badge.svg)](https://github.com/KonstantinKovalenko/telnyx-webdriverio-framework/actions/workflows/wdio.yml)  
Automated end-to-end testing framework for the **Telnyx** website built with **WebdriverIO**, **TypeScript**, and **Docker**.

✔ Page Object Model (POM) architecture  
✔ Component Object Model for reusable UI sections  
✔ TypeScript implementation  
✔ Multi-browser execution (Chrome, Firefox, Edge)  
✔ Cross-environment configuration  
✔ Reusable helper classes and centralized test data  
✔ Allure reporting  
✔ Docker support for local and CI execution  
✔ GitHub Actions CI pipeline   
✔ Automatic Allure report publishing to GitHub Pages  

[![GitHub Pages](https://img.shields.io/badge/View-Latest_Report-blue?logo=github)](https://konstantinkovalenko.github.io/telnyx-webdriverio-framework/)

---

## Test Coverage

The project contains **20 automated end-to-end test scenarios** covering:

- Navigation
- Login validation
- Download Pricing form
- Contact Sales form
- Registration UI
- Cookie Banner
- Integrations Search
- Mobile Navigation
- Pricing Tabs
- Resources Page
- Footer
- Comparison Page
- Error Pages
- AI Assistant Widget

Manual test cases are available in:

```
docs/test-cases/TestCases_1.0.xlsx
```

---

## Continuous Integration

GitHub Actions automatically executes the test pipeline when:

- Changes are pushed to the `main` branch.
- A pull request targeting the `main` branch is created or updated.

The workflow performs the following steps:

- Build the Docker image
- Execute the WebdriverIO test suite inside the Docker container
- Generate the Allure report
- Publish the report to GitHub Pages

---

## Project Structure

```
├── config/                         WebdriverIO configuration
│   ├── environments/
│   ├── wdio.base.conf.ts
│   ├── wdio.chrome.conf.ts
│   ├── wdio.firefox.conf.ts
│   └── wdio.edge.conf.ts
│
├── docs/                           Manual test documentation
│   └── test-cases/
│
├── src/
│   ├── components/                 Reusable UI components
│   ├── helpers/                    Helper classes
│   ├── pages/                      Page Objects
│   └── utils/                      Test data
│
├── tests/                          Automated test suites
│
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

---

### Installation

Clone the repository:

```bash
git clone https://github.com/KonstantinKovalenko/telnyx-webdriverio-framework.git
```

Navigate to the project:

```bash
cd telnyx-webdriverio-framework
```

Install dependencies:

```
npm install
```

---

### Available Scripts

| Script | Description |
|---------|-------------|
| `npm run chrome` | Run all tests in Google Chrome. |
| `npm run firefox` | Run all tests in Mozilla Firefox. |
| `npm run edge` | Run all tests in Microsoft Edge. |
| `npm run chrome:local` | Run all tests in Chrome using the local environment configuration. |
| `npm run chrome:dev` | Run all tests in Chrome using the development environment configuration. |
| `npm run chrome:qa` | Run all tests in Chrome using the QA environment configuration. |
| `npm run solo` | Run the Error Pages specification only. |
| `npm run allure:generate` | Generate an Allure report from the latest test results. |
| `npm run allure:open` | Open the generated Allure report in the browser. |
| `npm run allure:clean` | Remove Allure results and generated reports. |
| `npm run allure` | Generate and open the Allure report. |

---

### Run with Docker

Build the image:

```bash
docker build -t telnyx-wdio .
```

Run the test suite:

```bash
docker run --rm \
  -e DOCKER=true \
  -e TEST_ENV=local \
  telnyx-wdio
```

The same Docker image is used for both local execution and the GitHub Actions pipeline, ensuring a consistent test environment across development and CI.

---

## Author

Konstantin Kovalenko

* GitHub: https://github.com/KonstantinKovalenko  
* LinkedIn: [www.linkedin.com/in/kostyantyn-kovalenko/](https://www.linkedin.com/in/kostyantyn-kovalenko/)
* Email: chvyaka.kk@gmail.com
* Telegram: @kovakost