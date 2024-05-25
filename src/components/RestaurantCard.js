import { CDN_url } from "../utils/constants";

// import resList from "../utils/mockData";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } = resData?.info;
  return (
    <div
      data-testid="resCard"
      className="p-4 rounded-xl w-[280px] transform transition-transform duration-300 hover:scale-110 hover:shadow-lg"
    >
      <img
        className="rounded-md h-[150px] w-[250px]"
        alt="reslogo"
        src={CDN_url + cloudinaryImageId}
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => (
    <div className="relative">
      <label className="absolute top-0 left-0 bg-yellow-500 text-white text-sm p-1 rounded">
        Promoted
      </label>
      <RestaurantCard {...props} />
    </div>
  );
};

export default RestaurantCard;