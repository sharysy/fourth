function collect_same_elements(collection_a, object_b) {
    //在此处写代码
    var i, j, k = 0;
    var arr1 = [], arr2 = [], arr = [];

    for (i = 0; i < collection_a.length; i++)
        arr1[i] = collection_a[i].key;
    arr2 = object_b.value;
    for (i = 0; i < arr1.length; i++)
        for (j = 0; j < arr2.length; j++)
            if (arr1[i] === arr2[j]) {
                arr[k] = arr1[i];
                k++;
            }
    return arr;
}

module.exports = collect_same_elements;
