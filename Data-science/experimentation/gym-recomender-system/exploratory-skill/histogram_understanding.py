import pandas as pd
import matplotlib.pyplot as plt

# Load the dataframe using pandas
df = pd.read_csv('path-to-csv-file.csv')


equipment_counts = df['Equipment'].value_counts() # count occurences of each equipment

# Print the Dataframe  
print(df)

# Create a histogram using matplotlib
plt.figure(figsize=(10,8))
equipment_counts.plot(kind='bar', color='skyblue')
plt.xlabel('Equipment Type')
plt.ylabel('Number of Exercises')
plt.title('Distribution of Equipment Types in the Gym')
plt.xticks(rotation=45, ha='right')
plt.show()