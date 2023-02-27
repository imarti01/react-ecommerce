import { FilterWishes } from "../WishListPage/index";

export const Footer = ({ totalWishes }) => {
  return (
    <>
      <div>{totalWishes} WISHES</div>
      <FilterWishes />
    </>
  );
};
