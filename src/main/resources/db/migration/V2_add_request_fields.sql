
ALTER TABLE request
    ADD COLUMN call_sign VARCHAR(255),
    ADD COLUMN number_of_patients INTEGER,
    ADD COLUMN precedence VARCHAR(255),
    ADD COLUMN special_equipment VARCHAR(255),
    ADD COLUMN litter_patients INTEGER,
    ADD COLUMN ambulatory_patients INTEGER,
    ADD COLUMN security VARCHAR(255),
    ADD COLUMN marking VARCHAR(255),
    ADD COLUMN patient_nationality VARCHAR(255),
    ADD COLUMN nbc_contamination VARCHAR(255);
