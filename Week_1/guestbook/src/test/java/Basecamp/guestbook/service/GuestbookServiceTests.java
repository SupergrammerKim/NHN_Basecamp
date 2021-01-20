package Basecamp.guestbook.service;

import Basecamp.guestbook.dto.GuestbookDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class GuestbookServiceTests {
    @Autowired
    private GuestbookService service;

    @Test
    public void testRegister() {
        GuestbookDTO guestbookDTO = GuestbookDTO.builder()
                .title("Sample Title.....")
                .content("Sample Content.....")
                .writer("User0")
                .build();

        System.out.println(service.register(guestbookDTO));
    }
}

