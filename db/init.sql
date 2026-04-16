CREATE TYPE account_type AS ENUM (
    'DEBIT',
    'CREDIT',
    'PIX'
);

CREATE TYPE Entry_type AS ENUM {
    'EXPENSE',
    'INCOME',
    'INVESTMENT'
};

CREATE TYPE Invest_type AS ENUM {
    'SELL',
    'BUY'
};

CREATE TYPE Entry_category AS ENUM {
    'SALARY',
    'PROFIT',
    'INVESTMENT',
    'EXTRA_INCOME',
    'FIXED_EXPENSE',
    'VARIABLE_EXPENSE',
    'INSTALLMENT_EXPENSE',
    'CREDIT_CARD',
    'TRANSFER'
};

CREATE TABLE Entries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category Entry_category NOT NULL,
    type entry_type NOT NULL
);

CREATE TABLE Invest(
    id SERIAL PRIMARY KEY,
    entry_id INT NOT NULL,
    bank VARCHAR(100) NOT NULL,
    investment_type VARCHAR(100) NOT NULL,
    value DECIMAL(10, 2) NOT NULL,
    type Invest_type NOT NULL,
    code  VARCHAR(100),
    current_value DECIMAL(10, 2) NOT NULL
);

CREATE TABLE Records (
    id SERIAL PRIMARY KEY,
    entry_id INT NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    value DECIMAL(10, 2) NOT NULL,
    description VARCHAR(255),
    installment_total    INT,
    installment_relative INT,
    relative_date DATE,
    account account_type NOT NULL,
    FOREIGN KEY (entry_id) REFERENCES Entries(id)
);

