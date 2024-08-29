
#Imports
import pandas as pd
import matplotlib.pyplot as plt

#import CSV
df = pd.read_csv('eda_part_1.csv')

# Column inRange
df['InRange'] = df['Purchase'].between(7011, 9000)

#GroupBY
result = df.groupby('Product_ID')['InRange'].sum().reset_index()

#Renaming to better handle
result = result.rename(columns={'InRange': 'Count'})

#Filtering to include only rows where the 'Count' is 45 or higher
filtered_result = result[result['Count'] >= 45]
filtered_result.to_csv('', index=False)

# Matplotlib to show
plt.figure(figsize=(10, 6))
plt.bar(filtered_result['Product_ID'], filtered_result['Count'])
plt.xlabel('Product ID')
plt.ylabel('Count')
plt.title('Count of Purchases in Range (7000-9000) for Each Product ID where Count >= 45')
plt.xticks(rotation=45)
plt.tight_layout()

plt.show()