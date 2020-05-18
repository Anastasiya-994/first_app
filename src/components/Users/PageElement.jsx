import React, { useState } from 'react';
import classes from './Users.module.css';
let PageElement = (props) => {
    let page = [];
    let pagecount = Math.ceil(props.totalCount / props.pageSize);
    let pagePorcia = Math.ceil(pagecount / 10);
    let [porciaNumber, setPorciaNumber] = useState(1);
    let leftGranElem = (porciaNumber - 1) * 10 + 1;
    let rightGranElem = porciaNumber * 10;
    for (let i = 1; i <= pagecount; i++) {
        page.push(i);
    }
    return <div>
        {porciaNumber > 1 && <button onClick={() => { setPorciaNumber(porciaNumber - 1) }}
            className={classes.prevNext}>Prev</button>}

        {page.map((p) => {
            if (p >= leftGranElem && p <= rightGranElem) {
                return (
                    <span className={[props.pageCurrent === p ? classes.curretPage : null, classes.numPage].join(' ')}
                        onClick={() => { props.pageChange(p) }}>{p}
                    </span>

                )
            }

        })}
        {pagePorcia > porciaNumber && <button onClick={() => { setPorciaNumber(porciaNumber + 1) }}
            className={classes.prevNext}>Next</button>}
    </div>

}

export default PageElement;