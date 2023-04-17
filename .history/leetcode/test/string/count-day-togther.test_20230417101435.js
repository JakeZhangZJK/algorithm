import { countDaysTogether } from "../../code/string/count-day-together";

test('countDaysTogether', ()=>{
    expect(countDaysTogether("08-15", "08-18", "08-16", )).toEqual(3)
})