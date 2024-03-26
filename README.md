# World Happiness 2021 Visualization & Analysis
*Collaborators: Iris Michelsen, Nick Nath, Tan Palanivale, Nancy Zheng*  
![Happiness_Satellite_View](https://github.com/zhengn95/Project3_worldHappiness/blob/main/images/HappinessMap_Satellite.png)

### Introduction:  
Our project goals aimed to answer the following questions:
- How do factors such as GDP per capita, social support, life expectancy, freedom, and generosity contribute to world happiness?
- What countries and regions are the happiest? Which countries and regions are the unhappiest?  

### Table of Contents  
- Data (folder)  
  -`world-happiness-report-2021.csv`  
  -`world-happiness-report-2021-with-coordinates.csv`
- Jupyter Notebooks
  - `Geocoder.ipynb`: Using Geocoder (Python Library) to create a new CSV file called `world-happiness-report-2021-with-coordinates.csv` with longitude and latitude columns for each country. Please see the [geopy documentation](https://geopy.readthedocs.io/en/stable/#installation) for more information.
  - `Happinessproject.ipynb`: Python code with analysis and visualizations
- `WorldHappiness.sql`: Creating a database for `world-happiness-report-2021-with-coordinates.csv` in Postgre
- Interactive website using JavaScript comparing happiness scores of each country (check out this [link](https://zhengn95.github.io/Project3_worldHappiness/) or see GitHub pages to deploy our site):
  - Static (folder)
    - `script.js`
    - `style.css`
  - `index.html`
- Happiness Study Presentation PPT as a pdf on Github. Follow this [link](https://docs.google.com/presentation/d/1KXJUVdq0RAqzErKtP3b66RQ1zYB2AKOv/edit#slide=id.g2c42af9c4c2_3_0) to view our PowerPoint in Google Slides.

### Conclusion
Concluding the various analyses of happiness data generally suggests that happiness is a multi-faceted outcome influenced by several factors, rather than a single dominant cause. If we were to extrapolate from the datasets and charts provided, we could consider the following factors as significant contributors to happiness:  
- Economic Factors: A certain level of financial stability and wealth, as indicated by logged GDP per capita, is important. It provides the means for basic needs, access to healthcare, education, and opportunities for life satisfaction.
- Social Support: The presence of a reliable social network and the feeling that one has someone to count on in times of trouble appears to be a strong predictor of happiness. This includes family, friends, and community connections.  
- Health: Both physical and mental health are crucial for happiness. Healthy life expectancy means that people are not only living longer but also enjoying better health during those years.
Freedom to Make Life Choices: The liberty to make significant choices about one’s life affects happiness. This can include career choices, the choice to pursue education, or the freedom to express one's beliefs without fear.  
- Generosity: Cultures that emphasize generosity and altruism often report higher happiness. This reflects both personal and societal values that prioritize giving and sharing over individual accumulation.
- Good Governance: The perception of corruption and trust in governmental institutions can significantly affect the happiness of citizens. Transparency, fairness and the ability of citizens to rely on their leaders contribute to a sense of well-being.
- Mental Environment: Mental health issues, stress levels, and attitudes towards life (like optimism or pessimism) are not always directly measured but play a significant role in happiness.  
- Work-Life Balance: The ability to manage work demands while having time for personal interests and family is also important for happiness.  
- Cultural Factors: Cultural norms and societal values, such as emphasis on community versus individuality, can greatly influence happiness.  
- Environmental Quality: Access to clean air, water, and green spaces, as well as the overall quality of one’s environment, can enhance well-being.  

### Data Ethics Consideration 
In our ethical approach to data analysis using the World Happiness 2021 dataset we prioritized proper referencing of our sources. By citing the dataset's origin and the Gallup World Poll as our source, we ensured transparency and acknowledgment of the data's provenance. This practice not only upholds academic integrity but also facilitates the traceability of our analysis, promoting trust and accountability in our research process. Additionally, we made sure that our dataset did not include personally identifiable information. Our analysis began with a comprehensive bias audit to detect and mitigate potential biases, ensuring the integrity of our findings. 

During the creation of visualizations, we further upheld data ethics by representing the data accurately and without distortion. Each visualization was crafted with careful consideration, adhering to principles of fairness and inclusivity. We avoided any misleading representations that could lead to misinterpretation or perpetuate stereotypes. Additionally, we strived to present the data in a manner that respects the dignity and rights of the individuals represented within it.

By incorporating these ethical considerations into our analysis and visualization process, we aimed to not only derive meaningful insights into global well-being but also to do so with integrity and respect for the individuals whose data forms the foundation of our work. Our commitment to data ethics underscores our dedication to promoting fairness, transparency, and the responsible use of data in the pursuit of knowledge and understanding.  

### Resources:  
**Public Dataset in Kaggle**  
[World Happiness Report](https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021) 

**Python Libraries:**
pandas  
[matplotlib](https://matplotlib.org/)  
[scipy.stats](https://docs.scipy.org/doc/scipy/reference/stats.html)  
[pathlib](https://docs.python.org/3/library/pathlib.html)  
[geopy](https://geopy.readthedocs.io/en/stable/#installation)

**Java Script Libraries:**  
[leaflet](https://leafletjs.com/)  
[D3](https://d3js.org/)

**References**  
[Tableau](https://public.tableau.com/views/HappinessDatasetProject/Dashboard?:embed=y&:display_count=y&:showVizHome=no#!/vizhome/Happines[…]etProject/GDPvs_HS)  
[Color Hex Codes](https://www.color-hex.com/)  
