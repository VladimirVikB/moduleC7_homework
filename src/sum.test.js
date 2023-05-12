import {sum} from "./sum";

describe ('test sum', () =>{
        it('should 1+5',  ()=> {
            const res = sum(1, 5)
            expect(res).toBe(6)
        });
        it('sum 1 + -5', ()=> {
            const res = sum(1, -5)
            expect(res).toBe(-4)
        });
    }
)