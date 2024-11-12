from pymongo import MongoClient
import pandas as pd
from textblob import TextBlob

# Step 1: Connect to MongoDB
client = MongoClient("<your_mongo_connection_string>")
db = client["<your_database>"]
collection = db["<your_feedback_collection>"]  # Replace with your feedback collection name

# Step 2: Load feedback data into a DataFrame
data = pd.DataFrame(list(collection.find({}, {"Customer ID": 1, "Feedback": 1})))

# Step 3: Define a function to analyze sentiment
def analyze_sentiment(feedback):
    analysis = TextBlob(feedback)
    # Classify the sentiment
    if analysis.sentiment.polarity > 0:
        return 'Positive'
    elif analysis.sentiment.polarity < 0:
        return 'Negative'
    else:
        return 'Neutral'

# Step 4: Apply sentiment analysis to the feedback column
data['Sentiment'] = data['Feedback'].apply(analyze_sentiment)

# Step 5: Display the feedback analysis
feedback_analysis = data['Sentiment'].value_counts().reset_index()
feedback_analysis.columns = ['Sentiment', 'Count']

# Print the analysis result
print(feedback_analysis)

# Optional: Save the analysis to a new collection in MongoDB
# db["<your_analysis_collection>"].insert_many(data.to_dict('records'))
import matplotlib.pyplot as plt
import seaborn as sns

# Step 6: Visualize the sentiment analysis
plt.figure(figsize=(8, 5))
sns.barplot(x='Sentiment', y='Count', data=feedback_analysis, palette='viridis')
plt.title('Customer Feedback Sentiment Analysis')
plt.xlabel('Sentiment')
plt.ylabel('Count')
plt.xticks(rotation=45)
plt.show()
