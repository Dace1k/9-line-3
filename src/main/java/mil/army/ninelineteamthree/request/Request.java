
package mil.army.ninelineteamthree.request;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Request {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String location;
    private String callSign;
    private Integer numberOfPatients;
    private String precedence;
    private String specialEquipment;
    private Integer litterPatients;
    private Integer ambulatoryPatients;
    private String security;
    private String marking;
    private String patientNationality;
    private String nbcContamination;

    public Request() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getCallSign() {
        return callSign;
    }

    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    public Integer getNumberOfPatients() {
        return numberOfPatients;
    }

    public void setNumberOfPatients(Integer numberOfPatients) {
        this.numberOfPatients = numberOfPatients;
    }

    public String getPrecedence() {
        return precedence;
    }

    public void setPrecedence(String precedence) {
        this.precedence = precedence;
    }

    public String getSpecialEquipment() {
        return specialEquipment;
    }

    public void setSpecialEquipment(String specialEquipment) {
        this.specialEquipment = specialEquipment;
    }

    public Integer getLitterPatients() {
        return litterPatients;
    }

    public void setLitterPatients(Integer litterPatients) {
        this.litterPatients = litterPatients;
    }

    public Integer getAmbulatoryPatients() {
        return ambulatoryPatients;
    }

    public void setAmbulatoryPatients(Integer ambulatoryPatients) {
        this.ambulatoryPatients = ambulatoryPatients;
    }

    public String getSecurity() {
        return security;
    }

    public void setSecurity(String security) {
        this.security = security;
    }

    public String getMarking() {
        return marking;
    }

    public void setMarking(String marking) {
        this.marking = marking;
    }

    public String getPatientNationality() {
        return patientNationality;
    }

    public void setPatientNationality(String patientNationality) {
        this.patientNationality = patientNationality;
    }

    public String getNbcContamination() {
        return nbcContamination;
    }

    public void setNbcContamination(String nbcContamination) {
        this.nbcContamination = nbcContamination;
    }
}
