package Basecamp.guestbook.repository;

import Basecamp.guestbook.entity.Reply;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ReplyRepository extends JpaRepository<Reply, Long> {
}
