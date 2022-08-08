<?php

namespace App\Controller;

use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;

class ArticleController extends AbstractController
{
    protected $articleRepository;

    public function __construct(ArticleRepository $repository)
    {
        $this->articleRepository = $repository;
    }

    /**
     * @Route("/article", name="app_article")
     */
    public function index(): Response
    {
        return $this->render('article/index.html.twig', [
            'controller_name' => 'ArticleController',
        ]);
    }

    /**
     * @Route("/articles", name="article_list"), "methods={"GET", "HEAD"}
     */
    public function getArticles(): Response
    {
        $articles = $this->articleRepository->getArticles();

        return new JsonResponse($articles, Response::HTTP_CREATED);
    }

    /**
     * @Route("/articles_store", name="article_store"), "methods={"POST""}
     */
    public function store(Request $request)
    {
        //$article = new Article();
        dd($request);

    }
}
