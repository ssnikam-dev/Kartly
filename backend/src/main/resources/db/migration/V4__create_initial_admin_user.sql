INSERT INTO ecommerce.users (
    business_id,
    business_name,
    country_code,
    country_id,
    created_date,
    deleted,
    email,
    first_name,
    is_admin,
    is_user_seller,
    last_name,
    mac_id,
    password,
    phone_no,
    status,
    updated_date
)
SELECT
    NULL,
    NULL,
    '+91',
    NULL,
    CURRENT_TIMESTAMP,
    'N',
    'admin@sushant.com',
    'Admin',
    'Y',
    'N',
    'User',
    NULL,
    '$2a$12$1cofIOlXsdTga2Hj2F6S..ggiiCS4le2Hk/dO7m4Sm1GpfBpVdcly',
    '9876543210',
    'Y',
    CURRENT_TIMESTAMP
WHERE NOT EXISTS (
    SELECT 1
    FROM ecommerce.users
    WHERE LOWER(email) = LOWER('admin@sushant.com')
);