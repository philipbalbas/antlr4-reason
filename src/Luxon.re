type dt;

type durationObj = {
  .
  "weeks": int,
  "months": int,
};

[@bs.obj]
external makeDurObj: (~weeks: int=?, ~months: int=?, unit) => durationObj = "";

[@bs.module "luxon"] [@bs.scope "DateTime"]
external local: unit => dt = "local";
[@bs.send.pipe: dt] external setZone: string => dt = "setZone";
[@bs.send.pipe: dt] external minus: durationObj => dt = "minus";

let myDate =
  local() |> setZone("America/New_York") |> minus(makeDurObj(~weeks=1, ()));

Js.log(myDate);