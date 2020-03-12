import React from "react";
import TeamShow from "./TeamShow";
import { Link } from "react-router-dom";

class HomePage extends React.Component {
  render() {
    console.log("Homepage:",this.props.allTeams, this.props.news.articles)
    return (

      <div>


    

        {this.props.allTeams.map(team => (
          <Link to={`/teams/${team.id}`}>
            {" "}
            <img
              className="rest-card-img"
              key={team.id}
              style={{ width: 50, height: 50 }}
              alt={team.shortName}
              src={team.crestUrl}
            />{" "}
          </Link>
        ))}

        <table>
          <thead>
            <tr>
              <th>Premier League Table</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team</td>
              <td>Games Played</td>
              <td>Won</td>
              <td>Draw</td>
              <td>Lost</td>
              <td>Points</td>
              <td>GoalsFor</td>
              <td>GoalsAgainst</td>
              <td>GoalDifference</td>
            </tr>
            <tr>
              <td>Liverpool</td>
              <td>29</td>
              <td>27</td>
              <td>1</td>
              <td>1</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default HomePage;
