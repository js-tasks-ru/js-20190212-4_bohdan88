let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
  
    let begin = this.from;
    let finish = this.to;

    let fromDate = begin.getDate() + 1;
    let toDate = finish.getDate() + 1;

    let countMonth = ( new Date(begin.getFullYear(), begin.getMonth(), 0).getDate());

  
    return {
        next() {
            if (begin.setDate(fromDate) <= finish.setDate(toDate)) {
                if (fromDate > countMonth) {
                    fromDate = finish.getDate() - 1;
                }
                

               let putBrackets = (begin.getDay() === 5 || begin.getDay() === 6);
               
                return {
                    done: false,
                    value: fromDate < 10 ? putBrackets ? '[' +  0 + '' + fromDate++ + ']' : 
                     0 + '' + fromDate++   : putBrackets ? '[' +  '' + fromDate++ + ']':
                     '' + fromDate++ 
                }
            } else {
                return {
                    done: true
                }
            }
        }
    }
    
}

