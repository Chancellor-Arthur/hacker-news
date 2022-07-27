export const dateAndTime = (time: Date) =>
    `Date: ${
        time.getDate().toString().length === 1
            ? "0" + time.getDate()
            : time.getDate()
    }.${
        (time.getMonth() + 1).toString().length === 1
            ? "0" + (time.getMonth() + 1)
            : (time.getMonth() + 1)
    }.${
        time.getFullYear().toString().length === 1
            ? "0" + time.getFullYear()
            : time.getFullYear()
    } ${
        time.getHours().toString().length === 1
            ? "0" + time.getHours()
            : time.getHours()
    }:${
        time.getMinutes().toString().length === 1
            ? "0" + time.getMinutes()
            : time.getMinutes()
    }:${
        time.getSeconds().toString().length === 1
            ? "0" + time.getSeconds()
            : time.getSeconds()
    }`;
