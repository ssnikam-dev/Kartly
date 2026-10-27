INSERT INTO ecommerce.menu_type_master (
    created_by,
    created_date,
    deleted,
    menu_type_name,
    status
)
SELECT
    1,
    CURRENT_TIMESTAMP,
    'N',
    v.menu_type_name,
    'Y'
FROM (
    VALUES ('Admin'), ('Vendor'), ('Customer')
) AS v(menu_type_name)
WHERE NOT EXISTS (
    SELECT 1
    FROM ecommerce.menu_type_master mt
    WHERE LOWER(mt.menu_type_name) = LOWER(v.menu_type_name)
);