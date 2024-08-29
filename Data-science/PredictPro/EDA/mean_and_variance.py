
import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv('', encoding='utf-8')

# print the first 200 records
first_200_records = df.head(200)
print(first_200_records)

# Calculate mean, median, and mode for a column of interest 'Purchase'
mean_value = df['Purchase'].mean()
print(f'Mean value of column: {mean_value}')

median_value = df['Purchase'].median()
print(f'Mean value of column: {median_value}')

mode_value = df['Purchase'].mode()[0]
print(f'Mean value of column: {mode_value}')

#Create a new figure and axis
fig, ax = plt.subplots(figsize=(10,6))

n, bins, patches = ax.hist(df['Purchase'], bins=50, edgecolor='black', label='Purchase Distribution')

# matplotlib lines for mean and median and mode of 'Purchase' column
plt.axvline(mean_value, color='r', linestyle='dashed', linewidth=2, label=f'Mean: {mean_value}')
plt.axvline(median_value, color='b', linestyle='dashed', linewidth=2, label=f'Median: {median_value}')
plt.axvline(mode_value, color='y', linestyle='dashed', linewidth=2, label=f'Mode: {mode_value}')

# show
ax.set_xlabel('Purchase')
ax.set_ylabel('Frequency')
ax.set_title('Distribution of Purchase')

ax.legend()

plt.show()