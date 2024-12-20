# AI-Powered CRM Automation Tool

## Overview

In today’s data-driven landscape, managing customer behavior is vital for improving engagement, retention, and business growth. Our AI CRM Automation Tool overcomes the limitations of traditional CRMs by automating data processing, delivering actionable insights, and recommending targeted marketing strategies to enhance retention and customer lifetime value.

Optimized for the FMCG sector, this tool addresses high transaction volumes and robust customer retention strategies. It leverages ETL pipelines, machine learning, and natural language processing to convert raw data into insights. By automating customer segmentation, feedback analysis, and personalized recommendations, it seamlessly integrates into existing systems, boosting operational efficiency and enabling rapid responses to customer needs.

---

## Features

### 1. **Automated ETL Pipeline & Data Migration**
   - An ETL (Extract, Transform, Load) pipeline that takes data from various formats (e.g., CSV, Excel) and migrates it to MongoDB.
   - Supports automated data transformation for structured ingestion, facilitating seamless integration from legacy systems.

### 2. **Customer Segmentation**
   - Clusters customers based on purchase history, engagement levels, and demographics using K-Means clustering.
   - Allows the business to personalize marketing and support for each segment.

### 3. **Churn Prediction**
   - Predicts customers at risk of churning using a machine learning model, based on factors like engagement history and purchase patterns.
   - Generates actionable recommendations to reduce churn and improve retention.


### 4. **Sentiment Analysis on Customer Feedback**
   - Uses NLP to assess customer sentiment, categorizing feedback as positive, negative, or neutral.
   - Extracts key themes to help businesses identify product strengths and improvement areas.

### 5. **Lead Scoring & Targeted Marketing Campaigns**
   - Analyzes potential leads by scoring based on engagement level, purchase history, and predicted retention.
   - Groups leads by score, enabling focused marketing campaigns and improving conversion rates.

### 6. **KPI Tracking & Insights Dashboard**
   - Real-time visual dashboard to monitor essential metrics such as Customer Lifetime Value (CLV), Churn Rate, Retention Rate, Lead Score, and Product Popularity.
   - Enables data-driven decision-making with easily accessible metrics.

### 7. **Targeted Email Marketing Campaign Based on Lead Score Grouping**

   - The lead scoring system classifies potential leads into high, medium, and low-priority groups.
   - Each group receives a customized email campaign aimed at increasing conversion rates and engagement

### 8. RAG Chatbot for Customer Support and Insights
- Retrieves relevant data from a database, analyzes customer queries using NLP, and generates context-aware responses.
- Provides real-time, informative answers, improving customer support and decision-making based on dynamic data insights.
---

## Key Performance Indicators (KPIs) and Metrics

- **Customer Lifetime Value (CLV)**: Forecasts the revenue generated by a customer over their relationship duration.
- **Churn Rate**: Monitors the percentage of customers likely to leave.
- **Retention Rate**: Measures the percentage of customers likely to remain loyal.
- **Lead Score**: Scores potential leads based on engagement and purchase patterns.


## Models and Algorithms

1. **ETL Pipeline**: Automated pipeline for data extraction, transformation, and loading into MongoDB, enabling integration from diverse data formats.
2. **Customer Segmentation**: K-Means clustering groups customers based on their purchase and engagement metrics.
3. **Churn Prediction**: Random Forest Classifier predicts customers at risk of churning.
4. **Product Recommendation Engine**: Collaborative and content-based filtering recommends products to specific segments.
5. **Sentiment Analysis**: Latent Dirichlet Allocation (LDA) topic modeling identifies feedback themes, while spaCy processes sentiment analysis.
6. **Lead Scoring Model**: Scores leads using engagement, feedback sentiment, and predicted retention rate.

---

## Tech Stack

### Backend

- **MongoDB**: Primary database for customer, sales, and feedback data.
- **Python**: Core programming language for data processing and machine learning.
- **Flask**: Micro-framework for REST API development.

### Machine Learning / NLP Libraries

- **scikit-learn**: Model building for clustering, classification, and recommendation.
- **pandas, NumPy**: Data processing and manipulation.
- **spaCy**: Natural language processing and sentiment analysis.
- **Latent Dirichlet Allocation (LDA)**: Topic modeling for text data.
- **joblib**: Model persistence and reusability.

### Frontend

- **React**: User interface for insights and dashboard.
- **D3.js**: Data visualization for dynamic and interactive dashboards.

---

## Demo Video

https://github.com/user-attachments/assets/2e8557b4-46e0-4c6a-90cb-2a190913a123
