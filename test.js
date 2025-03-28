function armarRequestString() {
    const requestUrl = new URL("https://www.omdbapi.com/");
    requestUrl.searchParams.append("apikey", "aaahhh");
    console.log(requestUrl.href);
}
armarRequestString();