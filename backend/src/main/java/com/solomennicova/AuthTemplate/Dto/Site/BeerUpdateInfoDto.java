package com.solomennicova.AuthTemplate.Dto.Site;

import jakarta.validation.constraints.NotNull;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor(access= AccessLevel.PUBLIC, force=true)
@AllArgsConstructor
public class BeerUpdateInfoDto {

    @NotNull
    private Long id;

    private String name;

    private String description;

    private String color;
}
