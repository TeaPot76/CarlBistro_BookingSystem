package com.codeclan.karlbistro.components;

import com.codeclan.karlbistro.models.Booker;
import com.codeclan.karlbistro.repositories.BookerRepository.BookerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements ApplicationRunner {

    @Autowired
    BookerRepository bookerRepository;

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


    }
}
