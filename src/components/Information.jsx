import React from "react";

export default function Information() {
  return (
    <div className="infoPallete">
      <h1 className="largeHeading">Information we use!</h1>
      <div style={{height: "300px", overflow: "auto"}}>
      <ol>
        <li>
          <b>1. Type of crop: </b>This includes the scientific name and common
          name of the crop.
        </li>
        <li>
          <b>2. Cultivation method: </b>This includes information on the best
          growing conditions, such as soil type, climate, and irrigation
          methods.
        </li>
        <li>
          <b>3. Harvesting time: </b> This includes information on when the crop
          is ready to be harvested.
        </li>
        <li>
          <b>4. Yield: </b>This includes information on the expected yield per
          acre or hectare.
        </li>
        <li>
          <b>5. Nutritional value: </b>This includes information on the
          nutritional value of the crop, such as its protein, carbohydrate, and
          mineral content.
        </li>
        <li>
          <b>6. Pest and disease resistance: </b>This includes information on
          the crop's resistance to common pests and diseases.
        </li>
        <li>
          <b>7. Market demand: </b>This includes information on the demand for
          the crop in local and international markets.
        </li>
        <li>
          <b>8. Price: </b>This includes information on the average price for
          the crop in different markets.
        </li>
        <li>
          <b>9. Transportation and storage: </b>This includes information on how
          the crop should be transported and stored to maintain its quality.
        </li>
        <li>
          <b>10. Photos and videos: </b>This includes images and videos of the
          crop, the farm and the process of farming and harvesting.
        </li>
        <li>
          <b>11. Certification: </b>This includes information on any
          certifications the crop or farm may have such as organic, fairtrade
          etc.
        </li>
        <b>12. Traceability: </b>This includes information on how to trace the
        origin of the crop and the farm.
      </ol>
      </div>
      
    </div>
  );
}
