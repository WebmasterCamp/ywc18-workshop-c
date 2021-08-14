import Profile from "../assets/porfile.png";

export const BloodType = {
  A: "A",
  B: "B",
  O: "O",
  AB: "AB",
  Aneg: "A-",
  Bneg: "B-",
  Oneg: "O-",
  ABneg: "AB-",
};

export const user = {
  username: "Kittipat Dechkul",
  point: 100,
  history: [
    {
      id: 1,
      location: "ศูนย์บริจาคโลหิตแห่งชาติ สถากาชาดไทย",
      value: "1 Unit",
      time: "8 สิงหาคม 2021",
    },
    {
      id: 2,
      location: "โรงพยาบาลสมเด็จพระปิ่นเกล้า",
      value: "1 Unit",
      time: "14 มิถุนายน 2021",
    },
    {
      id: 3,
      location: "ศูนย์บริจาคโลหิตแห่งชาติ สถากาชาดไทย",
      value: "1 Unit",
      time: "2 มกราคม 2021",
    },
    {
      id: 4,
      location: "โรงพยาบาลรามาธิบดี",
      value: "1 Unit",
      time: "15 ตุลาคม 2020",
    },
    {
      id: 5,
      location: "ศูนย์บริจาคโลหิตแห่งชาติ สถากาชาดไทย",
      value: "1 Unit",
      time: "4 เมษายน 2020",
    },
  ],
  bloodType: BloodType.A,
  refferal: "YWC18C",
  picture: Profile,
};
