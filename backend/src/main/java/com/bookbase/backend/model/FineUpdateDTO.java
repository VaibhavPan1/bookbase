package com.bookbase.backend.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class FineUpdateDTO {
    @JsonProperty("Status")
    private String status;

    @JsonProperty("TransactionDate")
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy", timezone = "Asia/Kolkata")
    private Date transactionDate;

    @Override
    public String toString() {
        return "FineUpdateDTO{" +
                "status='" + status + '\'' +
                ", transactionDate=" + transactionDate +
                '}';
    }
}
