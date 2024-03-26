# World Happiness Project Proposal  
[Happiness Project Presentation](https://docs.google.com/presentation/d/1KXJUVdq0RAqzErKtP3b66RQ1zYB2AKOv/edit#slide=id.g2c42af9c4c2_3_0)  
*Collaborators: Iris Michelsen, Nick Nath, Tan Palanivale, Nancy Zheng*

### Story:  
How do factors such as GDP per capita, social support, life expectancy, freedom, and generosity contribute to world happiness?
What countries and regions are the happiest? Which countries and regions are the unhappiest?  

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
- Happiness_Study_Presentation   

**Original Dataset in Kaggle**  
[World Happiness Report](https://www.kaggle.com/datasets/ajaypalsinghlo/world-happiness-report-2021) 

**References**  
[Tableau](https://public.tableau.com/views/HappinessDatasetProject/Dashboard?:embed=y&:display_count=y&:showVizHome=no#!/vizhome/Happines[…]etProject/GDPvs_HS)  
[Color Hex Codes](https://www.color-hex.com/)

**Python libraries:**
pandas  
matplotlib.pyplot  
scipy.stats  
pathlib  
[geopy](https://geopy.readthedocs.io/en/stable/#installation)

**Java Script Libraries:**  
[leaflet](https://leafletjs.com/)
[D3](https://d3js.org/)
