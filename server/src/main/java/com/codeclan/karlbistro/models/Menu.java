package com.codeclan.karlbistro.models;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "menu")
public class Menu {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "type")
    private String type;

    @OneToMany(mappedBy = "menu")
    private List<MenuItem> items;

    public Menu (String type){
        this.type = type;
        this.items = new ArrayList<>();
    }

    public Menu(String type, List<MenuItem> items) {
        this.type = type;
        this.items = items;
    }

    public Menu(){

    };

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public List<MenuItem> getItems() {
        return items;
    }

    public void setItems(List<MenuItem> items) {
        this.items = items;
    }





}
