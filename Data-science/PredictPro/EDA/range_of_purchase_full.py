
#Imports
import pandas as pd
import matplotlib.pyplot as plt

#import CSV
df = pd.read_csv('')

# Column inRange
df['InRange'] = df['Purchase'].between(7011, 9000)

#GroupBY
result = df.groupby('Product_ID')['InRange'].sum().reset_index()

#Renaming to better handle
result = result.rename(columns={'InRange': 'Count'})

# Matplotlib to show
plt.figure(figsize=(10, 6))
plt.bar(result['Product_ID'], result['Count'])
plt.xlabel('Product ID')
plt.ylabel('Count')
plt.title('Count of Purchases in Range (7000-9000) for Each Product ID')
plt.xticks(rotation=45)
plt.tight_layout()

plt.show()