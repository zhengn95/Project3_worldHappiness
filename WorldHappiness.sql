--Setting up tables and schema---

CREATE TABLE World_Happiness_Report (
	Country_name VARCHAR(75) PRIMARY KEY NOT NULL,
	Regional_indicator	VARCHAR(75) NOT NULL,
	Ladder_score FLOAT NOT NULL,
	Standard_error_of_ladder_score FLOAT NOT NULL,
	upperwhisker FLOAT NOT NULL,
	lowerwhisker FLOAT NOT NULL,
	Logged_GDP_per_capita FLOAT NOT NULL,
	Social_support FLOAT NOT NULL,
	Healthy_life_expectancy FLOAT NOT NULL,
	Freedom_to_make_life_choices FLOAT NOT NULL,
	Generosity FLOAT NOT NULL,
	Perceptions_of_corruption FLOAT NOT NULL,
	Ladder_score_in_Dystopia FLOAT NOT NULL,
	Explainedby_LogGDPpercapita FLOAT NOT NULL,
	Explainedby_Socialsupport FLOAT NOT NULL,
	Explainedby_Healthy_life_expectancy FLOAT NOT NULL,
	Explainedby_Freedomtomakelifechoices FLOAT NOT NULL,
	Explainedby_Generosity FLOAT NOT NULL,
	Explainedby_Perceptionsofcorruption FLOAT NOT NULL,
	Dystopia_and_residual FLOAT NOT NULL
);


