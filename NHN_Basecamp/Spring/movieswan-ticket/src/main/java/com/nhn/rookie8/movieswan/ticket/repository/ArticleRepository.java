package com.nhn.rookie8.movieswan.ticket.repository;

import com.nhn.rookie8.movieswan.ticket.model.Article;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ArticleRepository extends JpaRepository<Article, Long> {
}
