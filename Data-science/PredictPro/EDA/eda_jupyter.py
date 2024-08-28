## This code was run using Jupyter Notebook using Google Colab
## Feel free to add code cells and run the code


# Libraries
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# Import the CSV file
# Remember to add the path where the file is
df = pd.read_csv('walmart.csv', encoding='utf-8')

# Print the first 200 records
# You can customize how much or
# If you want to print the whole dt use df.head()
first_200_records = df.head(200)
print(first_200_records)

#Check for null values
pd.isnull(df).sum()

# Chceking duplicate values in column of interest
duplicates = df[df['Product_ID'].duplicated()]
print(duplicates)

# Count how many duplicate records are there:
duplicate_count = df['Product_ID'].duplicated().sum()
print(f'The number is: {duplicate_count}')

# Check for maximum value available in column 'purchase'
max_value = df['Purchase'].max()
print(f'Maximum value in Column: {max_value}')


# Check for minimum value available in column 'purchase'
min_value = df['Purchase'].min()
print(f'The minimum value in column is: {min_value}')

# We will drop 'Gender', 'Age', 'Occupation', 'City_category', 'Stay_In_Current_City_Years' and 'Marital status' as our Model is not going to concentrate on those things
df_dropped = df.drop(columns=['Gender','Age','Occupation','City_Category','Stay_In_Current_City_Years','Marital_Status'])
print(df_dropped)
df_dropped.to_csv('/content/eda_part_1.csv', index=False)
