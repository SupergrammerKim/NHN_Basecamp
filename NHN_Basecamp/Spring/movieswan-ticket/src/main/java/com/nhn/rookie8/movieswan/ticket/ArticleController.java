package com.nhn.rookie8.movieswan.ticket;

import com.nhn.rookie8.movieswan.ticket.model.Article;
import com.nhn.rookie8.movieswan.ticket.repository.ArticleRepository;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/articles")
public class ArticleController {

    private ArticleRepository articleRepository;

    public ArticleController(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    @GetMapping("/{seq}")
    public String detail(@PathVariable("seq") Long seq, Model model) {
        Article article = articleRepository.findById(seq).orElse(null);

        if (article == null) return "article/error";
        model.addAttribute("detail", article);
        return "article/detail";
    }
}
