CREATE TYPE entry_type AS ENUM (
    'INCOME',
    'PAYMENT',
    'FIXED_EXPENSE',
    'VARIABLE_EXPENSE',
    'INSTALLMENT_EXPENSE',
    'INVESTMENT',
    'TRANSFER'
);

CREATE TYPE account_type AS ENUM (
    'DEBIT',
    'CREDIT',
    'PIX'
);

CREATE TABLE Entries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    type entry_type NOT NULL
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
