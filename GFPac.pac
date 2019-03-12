function FindProxyForURL(url, host)
{
    if (shExpMatch(host, "transit,ios.gf.ppgame.com")) 
        return "PROXY 192.168.0.103:8080";
    return "DIRECT";
}
