package com.codeclan.karlbistro.components;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.models.MenuItem;
import com.codeclan.karlbistro.models.SeatingTable;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import com.codeclan.karlbistro.repositories.MenuItemRepository.MenuItemRepository;
import com.codeclan.karlbistro.repositories.SeatingTableRepository.SeatingTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookerRepository bookerRepository;

    @Autowired
    SeatingTableRepository seatingTableRepository;

    @Autowired
    MenuItemRepository menuItemRepository;

    public DataLoader() {
    }

    @Override
    public void run(ApplicationArguments args) {
        Booker booker1 = new Booker("Alasdair", "01383123321");
        bookerRepository.save(booker1);

        Booker booker2 = new Booker("Katharina", "01411234567");
        bookerRepository.save(booker2);

        Booker booker3 = new Booker("Lidia", "01232456034");
        bookerRepository.save(booker3);

        Booker booker4 = new Booker("Rory", "01416789345");
        bookerRepository.save(booker4);

        SeatingTable table1 = new SeatingTable(2, 1);
        seatingTableRepository.save(table1);

        SeatingTable table2 = new SeatingTable(2, 2);
        seatingTableRepository.save(table2);

        SeatingTable table3 = new SeatingTable(4, 3);
        seatingTableRepository.save(table3);

        SeatingTable table4 = new SeatingTable(4, 4);
        seatingTableRepository.save(table4);

        SeatingTable table5 = new SeatingTable(6, 5);
        seatingTableRepository.save(table5);

        SeatingTable table6 = new SeatingTable(6, 6);
        seatingTableRepository.save(table6);

        MenuItem food1 = new MenuItem("Burger", "main", 5.0);
        menuItemRepository.save(food1);

        MenuItem food2 = new MenuItem("Hot Dog", "main", 4.0);
        menuItemRepository.save(food2);

        MenuItem food3 = new MenuItem("Stew", "main", 6.0);
        menuItemRepository.save(food3);

        MenuItem drink1 = new MenuItem("Coke", "drink", 1.0);
        menuItemRepository.save(drink1);

        MenuItem drink2 = new MenuItem("Irn Bru", "drink", 1.0);
        menuItemRepository.save(drink2);

        MenuItem drink3 = new MenuItem("Lilt", "drink", 1.0);
        menuItemRepository.save(drink3);

    }
}
