package mil.army.ninelineteamthree.request;

public class RequestBuilder {

    private Long id;
    private String location = "location";

    public static RequestBuilder request(){
        return new RequestBuilder();
    }
    public RequestBuilder withId(Long id){
        this.id=id;
        return this;
    }
    public RequestBuilder withLocation(String location){
        this.location=location;
        return this;
    }

    public Request build(){
        return new Request(this.id, this.location);
    }
}
