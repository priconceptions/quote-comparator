const jsonToColumnDefs = (jsonObject) => {
    const currencyKeyWords = ["cost", "payment", "bill"];
    const percentKeyWords = ["rate", "apr"];
    let columnDefs = [];
    const columnFormat = (key) => {
      if (containsKeyWord(key, currencyKeyWords)) {
          return {type: 'numericColumn', valueFormatter: currencyFormatter};
      }
      else if (containsKeyWord(key, percentKeyWords)) {
          return {type: 'numericColumn', valueFormatter: percentFormatter};
      }
      return {type: null, valueFormatter: null};
    };
    Object.keys(jsonObject).forEach(key => {
        let newObj = {
          headerName: toSentenceCase(key), 
          field: key,
          type: columnFormat(key).type,
          valueFormatter: columnFormat(key).valueFormatter
        };
        columnDefs.push(newObj);
    })
    return columnDefs;
};

const currencyFormatter = (params) => {
    return "$"  + Number(params.value.toFixed(2));
};

const percentFormatter = (params) => {
    return Number(params.value.toFixed(3)) + "%";
}

const containsKeyWord = (str, keyWords) => {
    if (keyWords.some(v => str.toLowerCase().includes(v))) { 
        return true;
    }
    return false;
}

const toSentenceCase = (camelCase) => {
    let headerArr = camelCase.split(/(?=[A-Z])/).map(str => str.length > 3 ? str.charAt(0).toUpperCase() + str.slice(1) : str.toUpperCase());
    return headerArr.join(' ');
};


export { jsonToColumnDefs, currencyFormatter, percentFormatter, toSentenceCase, containsKeyWord }