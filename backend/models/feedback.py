from pymongo import MongoClient
import pandas as pd
from textblob import TextBlob

# Step 1: Define a function to analyze sentiment
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
