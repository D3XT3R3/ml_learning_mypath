WITH sales_by_category AS (
  SELECT
    Product_ID,
    SUM(Purchase) as total_sales
  FROM
    `your_dataset.your_table`
  GROUP BY
    Product_ID
),
total_sales AS (
  SELECT SUM(total_sales) as grand_total
  FROM sales_by_category
),
pareto_analysis AS (
  SELECT
    Product_ID,
    total_sales,
    total_sales / (SELECT grand_total FROM total_sales) as percentage_of_total,
    SUM(total_sales) OVER (ORDER BY total_sales DESC) / (SELECT grand_total FROM total_sales) as cumulative_percentage
  FROM
    sales_by_category
  ORDER BY
    total_sales DESC
)
SELECT
  Product_ID,
  total_sales,
  ROUND(percentage_of_total * 100, 2) as percentage_of_total,
  ROUND(cumulative_percentage * 100, 2) as cumulative_percentage
FROM
  pareto_analysis
ORDER BY
  total_sales DESC