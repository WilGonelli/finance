CREATE TYPE account_type AS ENUM (
    'CHECKING',
    'CREDIT_CARD',
    'WALLET',
    'INVESTMENT'
);

CREATE TYPE record_type AS ENUM (
    'EXPENSE',
    'INCOME',
    'TRANSFER',
    'INVESTMENT'
);

CREATE TYPE investment_operation AS ENUM (
    'BUY',
    'SELL'
);

CREATE TABLE accounts (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,

    type account_type NOT NULL,

    credit_limit DECIMAL(10,2),
    closing_day INT,
    due_day INT,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE records (
    id SERIAL PRIMARY KEY,

    account_id INT NOT NULL,

    type record_type NOT NULL,

    category VARCHAR(50) NOT NULL,
    description VARCHAR(255),

    value DECIMAL(10,2) NOT NULL,

    record_date DATE NOT NULL,

    installment_total INT,
    installment_number INT,
    installment_group UUID,

    transfer_account_id INT,

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (account_id) REFERENCES accounts(id),
    FOREIGN KEY (transfer_account_id) REFERENCES accounts(id)
);

CREATE TABLE investments (
    id SERIAL PRIMARY KEY,

    record_id INT NOT NULL,

    broker VARCHAR(100) NOT NULL,
    asset_code VARCHAR(20),

    operation investment_operation NOT NULL,

    quantity DECIMAL(10,4),
    price DECIMAL(10,2),

    total_value DECIMAL(10,2),

    current_price DECIMAL(10,2),

    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (record_id) REFERENCES records(id)
);