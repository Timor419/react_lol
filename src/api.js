import Fetch from "./fetch";

export function findAllHeroes() {
    return fetch("http://windows:8080/hero/findAll")
        .then(response => response.json())
        .then(json => json.data)
        .then(data => data[1]);
}

export function getListHeroes(page, pageSize) {
    return fetch(`http://windows:8080/hero/getList?page=${page}&pageSize=${pageSize}`)
        .then(response => response.json())
        .then(json => json.data)
        ;
}


