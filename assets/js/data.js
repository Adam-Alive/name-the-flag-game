/* jshint esversion: 11 */

// Questions data
// Total number of questions = 81
const flagData = [
    {
        flag: 'Burkina Faso',
        options: [
            { text: 'Denmark', correct: false },
            { text: 'Benin', correct: false },
            { text: 'Burkina Faso', correct: true },
        ]
    },
    {
        flag: 'Poland',
        options: [
            { text: 'Mozambique', correct: false },
            { text: 'Poland', correct: true },
            { text: 'Saint Lucia', correct: false },
        ]
    },
    {
        flag: 'North Macedonia',
        options: [
            { text: 'North Macedonia', correct: true },
            { text: 'Channel Islands', correct: false },
            { text: 'Rwanda', correct: false },
        ]
    },
    {
        flag: 'South Korea',
        options: [
            { text: 'Malta', correct: false },
            { text: 'South Korea', correct: true },
            { text: 'Guinea', correct: false },
        ]
    },
    {
        flag: 'Malawi',
        options: [
            { text: 'Malawi', correct: true },
            { text: 'Albania', correct: false },
            { text: 'North Korea', correct: false },
        ]
    },
    {
        flag: 'Brunei',
        options: [
            { text: 'Israel', correct: false },
            { text: 'India', correct: false },
            { text: 'Brunei', correct: true },
        ]
    },
    {
        flag: 'Guyana',
        options: [
            { text: 'Guyana', correct: true },
            { text: 'Angola', correct: false },
            { text: 'Maldives', correct: false },
        ]
    },
    {
        flag: 'Bahrain',
        options: [
            { text: 'Bahrain', correct: true },
            { text: 'Antigua and Barbuda', correct: false },
            { text: 'Azerbaijan', correct: false },
        ]
    },
    {
        flag: 'Cyprus',
        options: [
            { text: 'Cyprus', correct: true },
            { text: 'Senegal', correct: false },
            { text: 'Bolivia', correct: false },
        ]
    },
    {
        flag: 'Netherlands',
        options: [
            { text: 'Netherlands', correct: true },
            { text: 'Taiwan', correct: false },
            { text: 'Russia', correct: false },
        ]
    },
    {
        flag: 'Chad',
        options: [
            { text: 'Syria', correct: false },
            { text: 'Chad', correct: true },
            { text: 'Uganda', correct: false },
        ]
    },
    {
        flag: 'Macao',
        options: [
            { text: 'Nepal', correct: false },
            { text: 'Macao', correct: true },
            { text: 'Egypt', correct: false },
        ]
    },
    {
        flag: 'Ireland',
        options: [
            { text: 'Ireland', correct: true },
            { text: 'Guyana', correct: false },
            { text: 'Bhutan', correct: false },
        ]
    },
    {
        flag: 'Cabo Verde',
        options: [
            { text: 'Canada', correct: false },
            { text: 'Cabo Verde', correct: true },
            { text: 'San Marino', correct: false },
        ]
    },
    {
        flag: 'Ghana',
        options: [
            { text: 'Ghana', correct: true },
            { text: 'Thailand', correct: false },
            { text: 'Belize', correct: false },
        ]
    },
    {
        flag: 'Kyrgyzstan',
        options: [
            { text: 'North Korea', correct: false },
            { text: 'Namibia', correct: false },
            { text: 'Kyrgyzstan', correct: true },
        ]
    },
    {
        flag: 'Latvia',
        options: [
            { text: 'Faeroe Islands', correct: false },
            { text: 'Latvia', correct: true },
            { text: 'Costa Rica', correct: false },
        ]
    },
    {
        flag: 'Turkey',
        options: [
            { text: 'Turkey', correct: true },
            { text: 'Réunion', correct: false },
            { text: 'Liechtenstein', correct: false },
        ]
    },
    {
        flag: 'Vatican City',
        options: [
            { text: 'Vatican City', correct: true },
            { text: 'Comoros', correct: false },
            { text: 'Czech Republic', correct: false },
        ]
    },
    {
        flag: 'Haiti',
        options: [
            { text: 'Saudi Arabia', correct: false },
            { text: 'Haiti', correct: true },
            { text: 'China', correct: false },
        ]
    },
    {
        flag: 'Mali',
        options: [
            { text: 'South Africa', correct: false },
            { text: 'Spain', correct: false },
            { text: 'Mali', correct: true },
        ]
    },
    {
        flag: 'Congo',
        options: [
            { text: 'Congo', correct: true },
            { text: 'Niger', correct: false },
            { text: 'United Kingdom', correct: false },
        ]
    },
    {
        flag: 'Armenia',
        options: [
            { text: 'Lesotho', correct: false },
            { text: 'Armenia', correct: true },
            { text: 'Greece', correct: false },
        ]
    },
    {
        flag: 'Angola',
        options: [
            { text: 'Mongolia', correct: false },
            { text: 'Angola', correct: true },
            { text: 'Senegal', correct: false },
        ]
    },
    {
        flag: 'Lebanon',
        options: [
            { text: 'Tajikistan', correct: false },
            { text: 'Lebanon', correct: true },
            { text: 'Finland', correct: false },
        ]
    },
    {
        flag: 'Saudi Arabia',
        options: [
            { text: 'Ecuador', correct: false },
            { text: 'Saudi Arabia', correct: true },
            { text: 'Georgia', correct: false },
        ]
    },
    {
        flag: 'Sudan',
        options: [
            { text: 'Kenya', correct: false },
            { text: 'France', correct: false },
            { text: 'Sudan', correct: true },
        ]
    },
    {
        flag: 'Barbados',
        options: [
            { text: 'Malawi', correct: false },
            { text: 'Barbados', correct: true },
            { text: 'Ukraine', correct: false },
        ]
    },
    {
        flag: 'Estonia',
        options: [
            { text: 'Estonia', correct: true },
            { text: 'Ethiopia', correct: false },
            { text: 'Israel', correct: false },
        ]
    },
    {
        flag: 'Morocco',
        options: [
            { text: 'Hong Kong', correct: false },
            { text: 'Morocco', correct: true },
            { text: 'Syria', correct: false },
        ]
    },
    {
        flag: 'Mexico',
        options: [
            { text: 'Norway', correct: false },
            { text: 'Mexico', correct: true },
            { text: 'Argentina', correct: false },
        ]
    },
    {
        flag: 'Sri Lanka',
        options: [
            { text: 'Latvia', correct: false },
            { text: 'Sri Lanka', correct: true },
            { text: 'Somalia', correct: false },
        ]
    },
    {
        flag: 'Myanmar',
        options: [
            { text: 'Myanmar', correct: true },
            { text: 'Zambia', correct: false },
            { text: 'Saint Vincent', correct: false },
        ]
    },
    {
        flag: 'Indonesia',
        options: [
            { text: 'Malaysia', correct: false },
            { text: 'Indonesia', correct: true },
            { text: 'Jordan', correct: false },
        ]
    },
    {
        flag: 'Bolivia',
        options: [
            { text: 'Sudan', correct: false },
            { text: 'Bolivia', correct: true },
            { text: 'Hungary', correct: false },
        ]
    },
    {
        flag: 'Liberia',
        options: [
            { text: 'Liberia', correct: true },
            { text: 'Jamaica', correct: false },
            { text: 'Djibouti', correct: false },
        ]
    },
    {
        flag: 'Serbia',
        options: [
            { text: 'Dominican Republic', correct: false },
            { text: 'Denmark', correct: false },
            { text: 'Serbia', correct: true },
        ]
    },
    {
        flag: 'Bosnia and Herzegovina',
        options: [
            { text: 'Bosnia and Herzegovina', correct: true },
            { text: 'Qatar', correct: false },
            { text: 'Iceland', correct: false },
        ]
    },
    {
        flag: 'Bangladesh',
        options: [
            { text: 'Lithuania', correct: false },
            { text: 'Bangladesh', correct: true },
            { text: 'Mayotte', correct: false },
        ]
    },
    {
        flag: 'Greece',
        options: [
            { text: 'Gabon', correct: false },
            { text: 'Dominica', correct: false },
            { text: 'Greece', correct: true },
        ]
    },
    {
        flag: 'Saint Lucia',
        options: [
            { text: 'Saint Lucia', correct: true },
            { text: 'Chad', correct: false },
            { text: 'Belize', correct: false },
        ]
    },
    {
        flag: 'Timor Leste',
        options: [
            { text: 'Belgium', correct: false },
            { text: 'Canada', correct: false },
            { text: 'Timor Leste', correct: true },
        ]
    },
    {
        flag: 'Comoros',
        options: [
            { text: 'Iraq', correct: false },
            { text: 'Comoros', correct: true },
            { text: 'Luxembourg', correct: false },
        ]
    },
    {
        flag: 'Andorra',
        options: [
            { text: "Côte d'Ivoire", correct: false },
            { text: 'Mozambique', correct: false },
            { text: 'Andorra', correct: true },
        ]
    },
    {
        flag: 'Gambia',
        options: [
            { text: 'San Marino', correct: false },
            { text: 'Gambia', correct: true },
            { text: 'Gibraltar', correct: false },
        ]
    },
    {
        flag: 'Japan',
        options: [
            { text: 'Japan', correct: true },
            { text: 'Burundi', correct: false },
            { text: 'Algeria', correct: false },
        ]
    },
    {
        flag: 'Zimbabwe',
        options: [
            { text: 'Peru', correct: false },
            { text: 'Eswatini', correct: false },
            { text: 'Zimbabwe', correct: true },
        ]
    },
    {
        flag: 'Tanzania',
        options: [
            { text: 'Central African Republic', correct: false },
            { text: 'Tanzania', correct: true },
            { text: 'Cameroon', correct: false },
        ]
    },
    {
        flag: 'Chile',
        options: [
            { text: 'Chile', correct: true },
            { text: 'Laos', correct: false },
            { text: 'Togo', correct: false },
        ]
    },
    {
        flag: 'Sweden',
        options: [
            { text: 'Uzbekistan', correct: false },
            { text: 'Sweden', correct: true },
            { text: 'Western Sahara', correct: false },
        ]
    },
    {
        flag: 'Venezuela',
        options: [
            { text: 'Suriname', correct: false },
            { text: 'Venezuela', correct: true },
            { text: 'Philippines', correct: false },
        ]
    },
    {
        flag: 'Monaco',
        options: [
            { text: 'Tunisia', correct: false },
            { text: 'Guatemala', correct: false },
            { text: 'Monaco', correct: true },
        ]
    },
    {
        flag: 'Paraguay',
        options: [
            { text: 'Paraguay', correct: true },
            { text: 'Panama', correct: false },
            { text: 'Brazil', correct: false },
        ]
    },
    {
        flag: 'Colombia',
        options: [
            { text: 'Isle of Man', correct: false },
            { text: 'Italy', correct: false },
            { text: 'Colombia', correct: true },
        ]
    },
    {
        flag: 'Sierra Leone',
        options: [
            { text: 'Sierra Leone', correct: true },
            { text: 'French Guiana', correct: false },
            { text: 'Nigeria', correct: false },
        ]
    },
    {
        flag: 'Argentina',
        options: [
            { text: 'Singapore', correct: false },
            { text: 'Pakistan', correct: false },
            { text: 'Argentina', correct: true },
        ]
    },
    {
        flag: 'Australia',
        options: [
            { text: 'Luxembourg', correct: false },
            { text: 'Australia', correct: true },
            { text: 'Kuwait', correct: false },
        ]
    },
    {
        flag: 'Brazil',
        options: [
            { text: 'Brazil', correct: true },
            { text: 'Tunisia', correct: false },
            { text: 'United Arab Emirates', correct: false },
        ]
    },
    {
        flag: 'Canada',
        options: [
            { text: 'Malta', correct: false },
            { text: 'Canada', correct: true },
            { text: 'Ethiopia', correct: false },
        ]
    },
    {
        flag: 'China',
        options: [
            { text: 'China', correct: true },
            { text: 'Madagascar', correct: false },
            { text: 'Iran', correct: false },
        ]
    },
    {
        flag: 'Croatia',
        options: [
            { text: 'Fiji', correct: false },
            { text: 'Jordan', correct: false },
            { text: 'Croatia', correct: true },
        ]
    },
    {
        flag: 'Czech Republic',
        options: [
            { text: 'Czech Republic', correct: true },
            { text: 'Zambia', correct: false },
            { text: 'Vietnam', correct: false },
        ]
    },
    {
        flag: 'Ecuador',
        options: [
            { text: 'Ecuador', correct: true },
            { text: 'Namibia', correct: false },
            { text: 'Nigeria', correct: false },
        ]
    },
    {
        flag: 'France',
        options: [
            { text: 'France', correct: true },
            { text: 'Uganda', correct: false },
            { text: 'Ivory Coast', correct: false },
        ]
    },
    {
        flag: 'Germany',
        options: [
            { text: 'Germany', correct: true },
            { text: 'Finland', correct: false },
            { text: 'Denmark', correct: false },
        ]
    },
    {
        flag: 'Hungary',
        options: [
            { text: 'Slovenia', correct: false },
            { text: 'Hungary', correct: true },
            { text: 'South Africa', correct: false },
        ]
    },
    {
        flag: 'India',
        options: [
            { text: 'Uzbekistan', correct: false },
            { text: 'India', correct: true },
            { text: 'Mozambique', correct: false },
        ]
    },
    {
        flag: 'Isle of Man',
        options: [
            { text: 'Isle of Man', correct: true },
            { text: 'Belgium', correct: false },
            { text: 'Oman', correct: false },
        ]
    },
    {
        flag: 'Italy',
        options: [
            { text: 'Malaysia', correct: false },
            { text: 'Italy', correct: true },
            { text: 'Mongolia', correct: false },
        ]
    },
    {
        flag: 'Jamaica',
        options: [
            { text: 'Jamaica', correct: true },
            { text: 'Philippines', correct: false },
            { text: 'Senegal', correct: false },
        ]
    },
    {
        flag: 'Nepal',
        options: [
            { text: 'Cambodia', correct: false },
            { text: 'Botswana', correct: false },
            { text: 'Nepal', correct: true },
        ]
    },
    {
        flag: 'New Zealand',
        options: [
            { text: 'Norway', correct: false },
            { text: 'New Zealand', correct: true },
            { text: 'Kazakhstan', correct: false },
        ]
    },
    {
        flag: 'Palau',
        options: [
            { text: 'Palau', correct: true },
            { text: 'Slovakia', correct: false },
            { text: 'Thailand', correct: false },
        ]
    },
    {
        flag: 'Palestine',
        options: [
            { text: 'Palestine', correct: true },
            { text: 'Cameroon', correct: false },
            { text: 'Bulgaria', correct: false },
        ]
    },
    {
        flag: 'Peru',
        options: [
            { text: 'Costa Rica', correct: false },
            { text: 'Peru', correct: true },
            { text: 'Mauritius', correct: false },
        ]
    },
    {
        flag: 'Portugal',
        options: [
            { text: 'Gabon', correct: false },
            { text: 'Egypt', correct: false },
            { text: 'Portugal', correct: true },
        ]
    },
    {
        flag: 'Spain',
        options: [
            { text: 'Spain', correct: true },
            { text: 'Iceland', correct: false },
            { text: 'Qatar', correct: false },
        ]
    },
    {
        flag: 'Tajikistan',
        options: [
            { text: 'Iraq', correct: false },
            { text: 'Tajikistan', correct: true },
            { text: 'Kenya', correct: false },
        ]
    },
    {
        flag: 'Ukraine',
        options: [
            { text: 'Switzerland', correct: false },
            { text: 'Ukraine', correct: true },
            { text: 'Romania', correct: false },
        ]
    },
    {
        flag: 'United Kingdom',
        options: [
            { text: 'Austria', correct: false },
            { text: 'United Kingdom', correct: true },
            { text: 'Laos', correct: false },
        ]
    },
    {
        flag: 'United States of America',
        options: [
            { text: 'Rwanda', correct: false },
            { text: 'United States of America', correct: true },
            { text: 'Algeria', correct: false },
        ]
    }
];
