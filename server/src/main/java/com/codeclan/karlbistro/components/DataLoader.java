package com.codeclan.karlbistro.components;

import com.codeclan.karlbistro.models.*;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import com.codeclan.karlbistro.repositories.BookingRepository.BookingRepository;
import com.codeclan.karlbistro.repositories.MenuItemRepository.MenuItemRepository;
import com.codeclan.karlbistro.repositories.OrderRepository.OrderRepository;
import com.codeclan.karlbistro.repositories.SeatingTableRepository.SeatingTableRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.LocalTime;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookerRepository bookerRepository;

    @Autowired
    SeatingTableRepository seatingTableRepository;

    @Autowired
    MenuItemRepository menuItemRepository;

    @Autowired
    BookingRepository bookingRepository;

    @Autowired
    OrderRepository orderRepository;

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

        SeatingTable table7 = new SeatingTable(6, 7);
        seatingTableRepository.save(table7);

        MenuItem food1 = new MenuItem("Burger", "main", 5.0);
        menuItemRepository.save(food1);

        MenuItem food2 = new MenuItem("Hot Dog", "main", 4.0);
        menuItemRepository.save(food2);

        MenuItem food3 = new MenuItem("Stew", "main", 6.0);
        menuItemRepository.save(food3);

        MenuItem food4 = new MenuItem("Vegan Burrito", "main", 7.0);
        menuItemRepository.save(food4);

        MenuItem food5 = new MenuItem("Greek Salad", "salad", 5.0);
        menuItemRepository.save(food5);

        MenuItem food6 = new MenuItem("Viennese Schnitzel", "main", 8.0);
        menuItemRepository.save(food6);

        MenuItem drink1 = new MenuItem("Coke", "drink", 1.0);
        menuItemRepository.save(drink1);

        MenuItem drink2 = new MenuItem("Irn Bru", "drink", 1.0);
        menuItemRepository.save(drink2);

        MenuItem drink3 = new MenuItem("Lilt", "drink", 1.0);
        menuItemRepository.save(drink3);

        MenuItem drink4 = new MenuItem("Red Wine", "drink", 4.0);
        menuItemRepository.save(drink4);

        MenuItem drink5 = new MenuItem("Champagne", "drink", 9.0);
        menuItemRepository.save(drink5);

        MenuItem drink6 = new MenuItem("Beer", "drink", 3.0);
        menuItemRepository.save(drink6);

        LocalDate date1 = LocalDate.of(2019,3, 31);
        LocalTime time1 = LocalTime.of(17,0);
        Booking booking1 = new Booking(date1, time1, 2, booker1, table1, "");
        bookingRepository.save(booking1);

        LocalDate date2 = LocalDate.of(2019,3, 27);
        LocalTime time2 = LocalTime.of(18,0);
        Booking booking2 = new Booking(date2, time2, 5, booker2, table3, "all vegan");
        bookingRepository.save(booking2);

        LocalDate date3 = LocalDate.of(2019,3, 25);
        LocalTime time3 = LocalTime.of(19,30);
        Booking booking3 = new Booking(date3, time3, 3, booker4, table6, "allergic to metal spoons");
        bookingRepository.save(booking3);

        LocalDate dateNow = LocalDate.now();
        LocalTime timeNow = LocalTime.now();
        Booking booking4 = new Booking(dateNow, timeNow, 3, booker4, table6, "booking right now");
        bookingRepository.save(booking4);

        LocalTime time5 = LocalTime.of(14, 00);
        Booking booking5 = new Booking(dateNow, time5, 3, booker4, table1, "booking today at 15:00");
        bookingRepository.save(booking5);

        LocalTime time6 = LocalTime.of(17, 00);
        Booking booking6 = new Booking(dateNow, time6, 2, booker1, table1, "");
        bookingRepository.save(booking6);

        LocalTime time7 = LocalTime.of(20, 00);
        Booking booking7 = new Booking(dateNow, time7, 2, booker2, table1, "");
        bookingRepository.save(booking7);

        LocalTime time8 = LocalTime.of(17, 00);
        Booking booking8 = new Booking(dateNow, time8, 2, booker2, table2, "");
        bookingRepository.save(booking8);

        LocalTime time9 = LocalTime.of(14, 00);
        Booking booking9 = new Booking(dateNow, time9, 2, booker2, table2, "");
        bookingRepository.save(booking9);

        Order order1 = new Order(booking1, drink1);
        orderRepository.save(order1);

        Order order2 = new Order(booking1, food1);
        orderRepository.save(order2);

        Order order3 = new Order(booking1, food2);
        orderRepository.save(order3);

        Order order4 = new Order(booking2, drink3);
        orderRepository.save(order4);

        Order order5 = new Order(booking2, food3);
        orderRepository.save(order5);

        Order order6 = new Order(booking3, drink2);
        orderRepository.save(order6);

    }
}
